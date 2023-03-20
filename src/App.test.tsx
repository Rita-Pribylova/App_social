import { createRoot } from 'react-dom/client';
import SamuraiJSApp from './App';

test('renders without crashing', () => {
  const container = document.createElement('div');
  const root = createRoot(container); 
  root.render(<SamuraiJSApp />);
  root.unmount();
});

// test('renders learn react link', () => {
//   render(<SamuraiJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

