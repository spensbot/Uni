/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import "./layout.css"
import SiteContainer from './SiteContainer'
import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'


const Layout = ({ children, title }) => {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <SiteContainer>
          {children}
        </SiteContainer>
      </ThemeProvider>
    </>
  )
}

export default Layout
