import { Link, animateScroll as scroll } from "react-scroll";
import { BiArrowToTop } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";
import { useState } from "react";

const eMailAddress = "imemekisa@gmail.com";

function Contact() {
  const [copied, setCopied] = useState();

  const handleCopyToClipboard = (Text) => {
    navigator.clipboard.writeText(Text);
    setCopied(Text);
    setTimeout(() => {
      setCopied();
    }, 1500);
  };

  return (
    <div id="Contact" className="max-h-fit bg-slate-700 text-slate-200">
      <div className="md:flex pt-10 md:pt-18 mx-4 md:mx-16 justify-between ">
        <div className="ml-32">
          <div className="flex">
            <button
              className="flex p-1 hover:animate-pulse items-center"
              onClick={() => handleCopyToClipboard(eMailAddress)}
            >
              <HiOutlineMail />
              <p className="ml-2">{eMailAddress}</p>
            </button>
            {copied === eMailAddress && (
              <span className="ml-4 p-1 bg-indigo-500 rounded">
                Mail Address is Copied to Clipboard!
              </span>
            )}
          </div>
          <div className="flex p-1 mt-6">
            <a
              href="https://www.linkedin.com/in/isaimemek/"
              target="blank"
              className="flex items-center hover:animate-pulse"
            >
              <RiLinkedinFill />
              <span className="ml-2">isaimemek</span>
            </a>
          </div>
        </div>
        <div className="mt-28 bg-slate-100 text-blue-700 rounded hover:cursor-pointer">
          <Link to="#" onClick={scroll.scrollToTop}>
            <div className="flex items-center justify-center p-2">
              <BiArrowToTop className="mr-2" />
              Scroll To Top
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
