import { useState, useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Home() {
// add a stateful variable that will hold the data returned from the fetch
const [quoteData, setQuoteData] = useState({
  quote: "Quote here",
  author: "Author here"
});

useEffect(() => {

}, [])

  const loadQuote = async () => {
    const QUOTE_URL = "https://api.breakingbadquotes.xyz/v1/quotes"
    try {
      // fetch the Data
      const response = await fetch(QUOTE_URL, { method: "GET" })
      // parse the JSON
      const parseQuoteData = await response.json()
      // save the data in state
      // the parseQuoteData has author and quote keys
      // so we're going to set that to the state
      setQuoteData(parseQuoteData[0])
    }
    catch (e){
      console.log(e)
    }
  
}

  return (
    <div>
      <Head>
        <title>We Love Quotes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {"Great Breaking Bad Quotes"}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Typography variant="h5" align="center" color="text.primary" paragraph
            >
              {quoteData.quote}
            </Typography>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.secondary"
              gutterBottom
            >
              {quoteData.author}
            </Typography>
            <Box
             display="flex"
             justifyContent="center"

            >
              <Button
                variant="contained"
                onClick={loadQuote}
              >
                Get New Quote
              </Button>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  )
}
