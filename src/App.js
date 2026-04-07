import {Routes, Route } from 'react-router-dom';
import './App.css';
import IndividualPostPage from './components/IndividualPostPage';
import ContactPage from './components/ContactPage';
import BlogPostsPage from './components/BlogPostsPage';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './components/ThemeContext';


function App() {
  return(
  <>
  <ThemeProvider>
    <Routes>
        <Route path="/post/:id" element={<IndividualPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<BlogPostsPage />} />
    </Routes>
  </ThemeProvider>
  </>
);
}

export default App;
