import { BrowserRouter, Link } from 'react-router-dom';
export default function DashBoard() {
  return (
    <BrowserRouter>
      <div>
        <Link to="dashboard" reloadDocument>
          DashBoard
        </Link>
      </div>
    </BrowserRouter>
  );
}
