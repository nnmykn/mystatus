import * as React from "react"

import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Script from 'next/script'


import styles from "../styles/top.module.scss"

import { Notification, KIND } from "baseui/notification"

const url = "https://ipinfo.io?callback"
const Page = () => {
    // get ip
    const [ip, setIp] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setIp(j.ip));
    }, []);
    // get city
    const [city, setCity] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setCity(j.city));
    }, []);
    // get region
    const [region, setRegion] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setRegion(j.region));
    }, []);
    // get hostname
    const [hostname, setHostname] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setHostname(j.hostname));
    }, []);
    // get org
    const [org, setOrg] = React.useState(0);
    React.useEffect(() => {
        fetch(url)
        .then((r) => r.json())
        .then((j) => setOrg(j.org));
    }, []);
    return (
        <div>
            <Head>
                <link rel="canonical" href="https://status.go5.run/ja/"/>
                <title key="site:title">MyStatus | ð£Displays the information published by your browser</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.notify}>
                    <Notification  kind={KIND.warning}>
                        {() => "ããã¯éçºä¸­ã®ãã¢çã§ããåºæ¬çã«ã¯æ­£å¸¸ã«åä½ãã¾ããã"}
                    </Notification>
                </div>
                <div className={styles.notify}>
                <Notification  kind={KIND.warning}>
                    {() => "ã¢ããã­ãã¯ãä½¿ç¨ãã¦ããã¨IPaddressãªã©ãæ­£å¸¸ã«è¡¨ç¤ºãããªãå ´åãããã¾ãã"}
                </Notification>
                </div>
                <div className={styles.notify}>
                    <Notification kind={KIND.negative}>
                        {() => "ç­æéã«ä½åº¦ããªã­ã¼ãããã¨ãã°ã­ã¼ãã«IPãè¡¨ç¤ºãããªããªãåé¡ãããã¾ã :("}
                    </Notification>
                </div>
                <Link href="mailto:hi@kan.run"><a>
                    <button className={styles.button}><span>Contact</span></button>
                </a></Link>
                <div></div>
                <div className={styles.ips}>
                <div id="ip" className={styles.ip}><h1>ããªãã®ã°ã­ã¼ãã«IP: {ip}</h1></div>
                <div id="ip" className={styles.ip}><h1>ããªãã®å°å: {region}</h1></div>
                <div id="ip" className={styles.ip}><h1>ããªãã®è¡: {city}</h1></div>
                <div id="ip" className={styles.ip}><h1>ããªãã®ãã¹ããã¼ã : {hostname}</h1></div>
                <div id="ip" className={styles.ip}><h1>ãã­ãã¤ãã¼: {org}</h1></div>
                </div>
                <div id="information" className={styles.info}></div>
            </main>
            <Script src="/js/info-jp.js" strategy="afterInteractive"/>
        </div>
    )
}


export default Page