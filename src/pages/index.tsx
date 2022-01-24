import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification } from "baseui/notification"

const Page: NextPage = () => {
        return (
        <div>
            <Head>
                <title key="site:title">MyStatus</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                <Notification>
                    {() => "This is a demo version under development. Basically, it does not work properly."}
                </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <Link href="/ip"><a>
                    <button className={styles.button}><span>IP info</span></button>
                </a></Link>
                <div id="information"></div>
            </main>
            <Script src="/js/info.js" strategy="afterInteractive"/>
        </div>
    )
}

export default Page