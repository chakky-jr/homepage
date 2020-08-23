import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core"
import theme from "../theme"
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Layout = props => (
    <>
        <Helmet>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Helmet>
        <ThemeProvider theme={theme}>
            <Header />
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
            <Footer />
        </ThemeProvider>
    </>
)

Layout.propTypes = {
    children: PropTypes.node,
}
