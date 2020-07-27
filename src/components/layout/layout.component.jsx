import React from "react"
import Header from "../header/header.component"
import Footer from "../footer/footer.component"

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
