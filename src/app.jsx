import 'bootstrap/dist/css/bootstrap.css';
import Counter from './Counter/Counter.jsx';
import { Container, Spinner } from 'react-bootstrap';
import Home from './Home/Home.jsx';
// import About from "./About/About.jsx";
import Menu from './Menu.jsx';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import MyForm from './Form/MyForm.jsx';
import Movies from './Movies/Movies.jsx';
import Contacts from './Contacts/Contacts.jsx';
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const About = lazy(() => import('./About/About.jsx')); // This import statement makes the file get separated from the others when doing npm run build

// Configure for all queries
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

function Root() {
  const location = useLocation();

  return (
    <>
      <Menu />
      <Container className='mt-3'>
        <Suspense fallback={<Spinner variant='primary' />}>
          <ErrorBoundary
            fallback={<div>Sorry, we have an error</div>}
            key={location.pathname}
          >
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </Container>
    </>
  );
}

let router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      { path: '/', element: <Home />, isIndex: true },
      { path: '/home', element: <Home /> },
      { path: '/about', element: <About /> },
      {
        path: '/counter',
        element: <Counter firstName='Mike' lastName='Smith' />,
      },
      { path: '/form', element: <MyForm /> },
      { path: '/movies', element: <Movies /> },
      { path: '/contacts', element: <Contacts /> },
      { element: <p>Page Cannot Be Found</p> },
    ],
  },
]);
