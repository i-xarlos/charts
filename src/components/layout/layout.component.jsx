import React from "react"
import Header from "../header/header.component"
import Footer from "../footer/footer.component"
import "./layout.styles.scss"
import layoutStyles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
