import { REPO_URL } from '../config';

export default function Footer() {
  return (
    <footer className='page-footer teal lighten-3'>
      <div className='footer-copyright'>
        <div className='container'>
          Copyright © {new Date().getFullYear()} Food Recipes
          <a className='grey-text text-lighten-4 right' href={REPO_URL}>
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
