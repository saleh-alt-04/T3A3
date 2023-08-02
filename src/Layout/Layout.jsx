import NavTop from "../components/NavTop"
import { Footer } from "flowbite-react"

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <div>
      <NavTop />
      {children}
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              alt="Flowbite Logo"
              href="https://flowbite.com"
              name="Flowbite"
              src="https://flowbite.com/docs/images/logo.svg"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright by="Flowbite™" href="#" year={2022} />
        </div>
      </Footer>
    </div>
  )
}

export default Layout
