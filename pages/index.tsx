import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import semi_circle from "../assets/images/semi_circles.svg";
import HomePage from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home: NextPage = () => {
  return (
    <div>
      <HomePage />
    </div>
  );
};

export default Home;
