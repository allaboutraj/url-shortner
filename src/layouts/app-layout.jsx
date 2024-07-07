import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        {/*Body*/}
        <Outlet />
      </main>

      {/*Footer*/}
      <div className="p-7 text-center bg-gray-900 mt-10 flex justify-between">
        Made with ❤️
        <div className="flex justify-center">
          <a href="https://github.com/allaboutraj" target="_blank">
            <Avatar>
              <AvatarImage src="/public/github.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </a>
          <a href="https://www.instagram.com/allabout_raj/" target="_blank">
            <Avatar className="mx-5 ">
              <AvatarImage src="/insta.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </a>
          <a
            href="https://www.linkedin.com/in/manishkumar1711/"
            target="_blank"
          >
            <Avatar>
              <AvatarImage src="/linkdin.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
