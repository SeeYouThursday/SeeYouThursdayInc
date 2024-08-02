import { useRouter } from 'next/router';
import Link from 'next/link';

const CatchAllPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="text-center mt-50">
      <h1>Page Not Found</h1>
      <p>
        The page <strong>{slug}</strong> does not exist. Please go back to the{' '}
        <Link href="/">Homepage
        <a>Homepage</a>
        </Link>.
      </p>
      <p>
        <strong>Path:</strong> {Array.isArray(slug) ? slug.join('/') : slug}
      </p> 
    </div>
  );
}

export default CatchAllPage;