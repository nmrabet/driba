import { useEffect } from "react";
import { useRouter } from "next/router";

const notFound = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Page not found</h1>
    </div>
  );
};

export default notFound;
