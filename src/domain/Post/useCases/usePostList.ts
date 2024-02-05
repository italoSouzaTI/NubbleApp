import {useEffect, useState} from 'react';

import {Post, postService} from '@domain';
export function usePostList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);
  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return {
    loading,
    error,
    postList,
    fetchData,
  };
}
