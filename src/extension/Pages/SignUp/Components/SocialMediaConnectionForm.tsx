import * as React from 'react'
import { Box, List, ListItem, Link } from '@mui/material'

interface SocialMediaSite {
  name: string
  url: string
}

const socialMeidaSites: SocialMediaSite[] = [
  { name: 'Tiktok', url: 'https://tiktok.com' },
  { name: 'YouTube', url: 'https://youtube.com' },
]

export default function SocialMediaConnectionForm() {
  return (
    <Box sx={{ width: '80%' }}>
      <List>
        {socialMeidaSites.map((item) => {
          return (
            <ListItem disablePadding>
              <Link href={item.url}>{item.name}</Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
