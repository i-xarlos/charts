import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout.component"

export default function Home() {
  return (
    <Layout>
      <h1>Welcome to Home</h1>
      <Link to="/contact">Contact</Link>
      <Link to="/prices">Prices</Link>
    </Layout>
  )
}
