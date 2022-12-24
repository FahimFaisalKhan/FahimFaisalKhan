import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MyLoader } from "../contexts/LoaderContext";

export const ScrollTop = () => {
  const { pathname } = useLocation();
  const { loading, setLoading } = useContext(MyLoader);
  console.log(loading);

  useEffect(() => {
    console.log(pathname);

    if (!loading) {
      const scroll = sessionStorage.getItem(pathname);
      console.log(scroll);
      if (scroll) {
        console.log("scroll:", scroll);
        const scroll_Y_To = parseInt(scroll);

        window.scrollTo(0, scroll_Y_To);
        console.log("came from detail page");
        // sessionStorage.removeItem(pathname);
      } else {
        window.scrollTo(0, 0);
        console.log("came from navigation page");
      }
    }
  }, [pathname, loading, setLoading]);

  return null;
};
