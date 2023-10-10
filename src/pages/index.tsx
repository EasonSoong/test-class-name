import { Inter } from 'next/font/google'
import { Hidden } from '@mui/material'

export default function Home() {
  return (
    <div>
      hidden element: <Hidden smDown implementation="css"><div>test</div></Hidden>
    </div>
  )
}
