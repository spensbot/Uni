import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from "@material-ui/core"
import logo from '../images/Logo3_small.svg'
import logo2 from '../images/Logo3.svg'
import Layout from "../components/layout"
import SEO from "../components/seo"

const useStyles = makeStyles({
  title: {
    fontWeight: 'bold'
  },
  header: {
    fontWeight: 'bold'
  }
});

const Index = () => {

  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Uni | The Open Source Spoken Language"/>
      <Box height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="center">
          <img style={{margin: "0 1rem"}} width="250rem" height="250rem" src={logo} alt="Uni Logo"></img>
          <Box textAlign="left">
            <Typography variant="h1" className={classes.title}>uni</Typography>
            <Typography variant="h5">The open source spoken language</Typography>
          </Box>
        </Box>
      </Box>
      <div>
        <Typography variant ="h5">Built upon the strengths of existing languages</Typography>
        <Typography>All modern languages get some things right, and some things wrong, leaving them difficult to learn, and inefficient to use.</Typography>
        <Typography>Uni is developed by a community of passionate linguists that want to make global communication more accessible.</Typography>
        <Typography variant="h5">Key Goals</Typography>
        <ul>
          <li>Easy/Intuitive to learn | Someone who understands uni can identify what part of speech a word is (noun, adjective, or verb) based on how the word is written or pronounced.</li>
          <li>Efficiently Written</li>
          <li>Efficiently Spoken | Uni doesn't use tonals (such as in chinese or vietnamese). This way tone can be used to express other things in the language, such as in music, or implying confusion.</li>
        </ul>
        <Typography variant="h4">Elegant grammar</Typography>
        <Typography>Unnecessary or overly complicated grammatic structures are left out entirely.</Typography>
        <ul>
          <li>No conjugations. Some languages (spanish, italian, french, etc.) conjugate a given verbs in over 30 ways depending on tense and pronoun</li>
          <li>No genders. Some languages use masculine, feminine, or neutral versions of words</li>
          <li>No unncessary filler words. English is notorious for this.</li>
        </ul>
        <Typography variant="h4">Concise Characters</Typography>
        <Typography>In uni, each character makes one, unique sound. Any word can be spelled phonetically, and reading is incredibly easy.</Typography>
        <ul>
          <li>No more confusing spellings/pronunciations. English is</li>
          <li></li>
        </ul>
        <Typography variant="h4">Meaningful Vocabulary</Typography>
        <Typography>Only necessary words exist</Typography>
      </div>
    </Layout>
  )
}

export default Index

