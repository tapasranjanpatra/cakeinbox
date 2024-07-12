import Image from "next/image";
import Mainpage from "@/components/Mainpage";
import Showcase from "@/components/Showcase";
import Review from "@/components/Review";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from "@/components/LoginForm";


export default async function Home() {

  const session=await getServerSession(authOptions);
  if(session) redirect("/dashboard");

  
  return (
    
    <>
    
    <Mainpage/>
    <Showcase/>
    <Review/>
    <Footer/>
  
   
    </>
      );
}
