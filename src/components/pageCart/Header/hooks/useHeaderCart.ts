import { useRouter } from 'next/router';

export default function useHeaderCart() {
  const router = useRouter();
  function handleReturnClick() {
    router.back();
  }

  return { handleReturnClick };
}
