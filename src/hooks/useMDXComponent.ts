import React, { useState, useEffect } from 'react';
import { bundleMDXFile } from 'mdx-bundler';
import path from 'path';
import fs from 'fs';

interface Props {
  slug: string;
}

export default function useMDXComponent({ slug }: Props) {
  const [result, setResult] = useState<any>();
  const ROOT_PATH = process.cwd();
  const POSTS_PATH = path.join(ROOT_PATH, 'src/posts');

  useEffect(() => {
    const filePath = fs.readFileSync(
      path.join(POSTS_PATH, `${slug}.mdx`),
      'utf8'
    );

    async function bundleFile(filePath: string) {
      const { code, frontmatter } = await bundleMDXFile(filePath);
      setResult({ code, meta: frontmatter });
    }

    bundleFile(filePath);
  });

  if (result)
    return {
      ...result,
    };

  return {
    code: null,
    meta: null,
  };
}
