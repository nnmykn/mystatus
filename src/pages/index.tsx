import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"

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
                <Link href="/status"><a>
                    <button className={styles.button}><span>Get Start</span></button>
                </a></Link>
            </main>
        </div>
    )
}

export default Page