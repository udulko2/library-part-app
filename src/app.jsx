import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BookPage } from './pages/book';
import { Layout } from './pages/layouts/layout';
import { NavigationLayout } from './pages/layouts/navigation-layout';
import { MainPage } from './pages/main';
import { OfertaPage } from './pages/oferta';
import { PageNotFound } from './pages/page-not-found';
import { RulesPage } from './pages/rules';

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<NavigationLayout />}>
          <Route path='/' element={<Navigate to='/books/all' />} />
          <Route path='/books/:category' element={<MainPage />} />
          <Route path='/rules' element={<RulesPage />} />
          <Route path='/oferta' element={<OfertaPage />} />
        </Route>
        <Route path='/books/:category/:bookId' element={<BookPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  </HashRouter>
);
