import NavTop from "../components/NavTop"
import { Footer } from "flowbite-react"
import { useEffect } from "react"
import { useAuthStore } from "../store/AuthStore"

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  const [user, setUser] = useAuthStore((state) => [state.user, state.setUser])

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token && !user) {
      setUser({ ...user, token })
    }
  }, [user])
  return (
    <div>
      <NavTop />
      {children}
      <Footer container>
        <div className="w-full text-center">
          <Footer.Divider />
          <Footer.Copyright
            by="Customer Manager Portal"
            href="/"
            year={new Date().getFullYear()}
          />
        </div>
      </Footer>
    </div>
  )
}

export default Layout
