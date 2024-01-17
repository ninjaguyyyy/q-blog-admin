import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Button, notification } from 'antd';

import { Post } from 'models/entity';
import { deletePost, fetchPosts } from 'services/api-client/post.service';
import { getMessageFromError } from 'utils/error';
import ConfirmationModal from 'components/molecules/ConfirmationModal';
import PostTable from 'components/organisms/PostTable';

export default function PostManagement() {
  // Queries
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: posts,
    refetch
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  });
  console.log('🚀 ~ PostManagement ~ posts:', posts);

  // Mutation
  const deletePostMutation = useMutation((postId: string) => {
    return deletePost(postId);
  });

  // State
  const [selectedPost, setSelectedPost] = useState<Post>();
  const [isShowConfirmationModal, setIsShowConfirmationModal] = useState<boolean>(false);

  // Effects
  useEffect(() => {
    if (error) {
      openErrorNotification(getMessageFromError(error));
    }
  }, [error]);

  // Notification
  const [api, notiContextHolder] = notification.useNotification();

  // Functions
  const openErrorNotification = (errMsg: string) => {
    api.info({
      message: `Error`,
      description: errMsg,
      type: 'error'
    });
  };

  const openSuccessNotification = (msg: string) => {
    api.info({
      message: `Success`,
      description: msg,
      type: 'success'
    });
  };

  const handleClickNewPost = () => {
    // todo: redirect to new page
  };

  const handleClickEditPost = (postId: string) => {
    const post = posts?.find((post) => post._id === postId);
    // todo: redirect to edit page
  };

  const handleConfirmDeleteCategory = async () => {
    try {
      await deletePostMutation.mutateAsync(selectedPost?._id as string);
      openSuccessNotification('Delete successfully!');
      setIsShowConfirmationModal(false);
    } catch (error: unknown) {
      openErrorNotification(getMessageFromError(error));
    } finally {
      setSelectedPost(undefined);
    }
  };

  const handleCloseConfirmation = () => {
    setIsShowConfirmationModal(false);
    setSelectedPost(undefined);
  };

  const handleClickDeletePost = async (postId: string) => {
    const post = posts?.find((post) => post._id === postId);
    setSelectedPost(post);
    setIsShowConfirmationModal(true);
  };

  // Render
  return (
    <div className="page-management-container">
      <div className="heading px-6 py-6 font-medium text-lg">Posts</div>

      <div className="section px-6 py-6">
        <div className="mb-4 flex justify-end">
          <Button type="primary" size="large" onClick={handleClickNewPost}>
            New Post
          </Button>
        </div>

        <PostTable
          dataSource={posts?.posts}
          isLoading={isLoading}
          onClickDelete={handleClickDeletePost}
          onClickEdit={() => console.log('run')}
        />
      </div>

      {isShowConfirmationModal && (
        <ConfirmationModal
          onOk={handleConfirmDeleteCategory}
          onCancel={handleCloseConfirmation}
          isSubmitting={deletePostMutation.isLoading}
        />
      )}

      {notiContextHolder}
    </div>
  );
}
