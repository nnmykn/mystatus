import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification } from "baseui/notification"

type Props = { ip: string };
const Page = ({ ip }: Props) => {
    return (
        <div>
            <Head>
                <title key="site:title">MyStatus | 👣Displays the information published by your browser</title>
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
                <div id="ip" className={styles.ip}><h1>Your Global IP: {ip}</h1></div>
                <div id="information" className={styles.info}></div>
            </main>
            <Script src="/js/info.js" strategy="afterInteractive"/>
        </div>
    )
}
const url = "https://ipinfo.io?callback"
export async function getServerSideProps() {
    const json = await fetch(url).then((r) => r.json());
    const ip = json.ip;
    return {
        props: {
        ip,
        },
    };
}
  

export default Page