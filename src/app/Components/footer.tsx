'use client';
import { Typography, Button, TextField } from "@mui/material";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Premium Tools", "Blog"],
  },
  {
    title: "Pages",
    items: ["Login", "Register", "Add List", "Contact"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Team", "About Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="primary" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <a href="#">
                      <Typography className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900">
                        {link}
                      </Typography>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </Typography>
            <Typography variant="body2" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  className="w-full"
                />
                <Typography className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button variant="contained" color="primary" size="medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Typography
          color="textSecondary"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} Made with{" "}
          <a href="https://mui.com" target="_blank">
            MUI
          </a>{" "}
          by{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            Creative Tim
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;