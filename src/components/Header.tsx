import { NextPage } from "next"
import * as React from "react"
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CSSProperties, FunctionComponent } from 'react'

import styles from "../styles/components/Header.module.scss"


//Base Webの読み込み
import {useStyletron} from 'baseui'
import {
  AppNavBar,
  setItemActive,
  NavItemT,
} from 'baseui/app-nav-bar'
import { Notification } from "baseui/notification"
import {Skeleton} from 'baseui/skeleton'


const Header: FunctionComponent = () => {
    const [css] = useStyletron()
    return (
    <div>
    <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap" rel="stylesheet"/>
    </Head>
    <header>
        <AppNavBar
            title={(
                <Link href="/">
                    <a className={styles.logo}>MyStatus</a>
                </Link>
            )}
        />
    </header>
    </div>
  )
}
export default Header