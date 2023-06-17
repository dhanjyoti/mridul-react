import { Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Header() {
    const location = useLocation()
    const [menuChecked, setMenuChecked] = useState(false)
    useEffect(() => {
        setMenuChecked(false)
    }, [location])

    return (
        <div className="w-full bg-default/80 md:bg-primary/60 fixed top-0 left-0 right-0 z-50 pl-6 md:px-3">
            <div className="max-w-screen-xl m-auto h-auto md:h-14 text-secondary flex flex-col md:flex-row items-center justify-between">
                <input type="checkbox" hidden id="menu" className="menu" checked={menuChecked} onChange={(e) => { setMenuChecked(e.target.checked) }} />
                <div className="flex-1 flex flex-row items-center w-full justify-between">
                    <Link to={"/"}>
                        <svg viewBox="0 0 156 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 md:w-32">
                            <path
                                d="M5.824 30V4.272H6.784V30H5.824ZM1.6 30V4.272H2.56V30H1.6ZM3.712 30V4.272H4.672V30H3.712ZM26.528 30V4.272H27.488V30H26.528ZM22.304 30V4.272H23.264V30H22.304ZM24.416 30V4.272H25.376V30H24.416ZM15.744 15.152L15.168 14.288L21.152 5.616V7.312L15.744 15.152ZM17.024 20.688L7.936 7.696V6.064L17.632 19.856L17.024 20.688ZM17.056 17.008L16.48 16.144L21.152 9.488V11.152L17.056 17.008ZM15.744 22.576L7.936 11.44V9.744L16.32 21.712L15.744 22.576ZM18.336 18.832L17.76 18L21.152 13.168V14.832L18.336 18.832ZM14.464 24.4L7.936 15.12V13.424L15.04 23.568L14.464 24.4ZM32.4858 30V17.136H37.5098C38.5551 17.1573 39.4511 17.52 40.1978 18.224C40.9444 18.9067 41.3178 19.856 41.3178 21.072C41.3178 22.0107 41.0831 22.8 40.6138 23.44C40.1658 24.08 39.5791 24.528 38.8538 24.784L41.0938 30H40.0378L37.9258 24.976C37.7551 24.9973 37.6164 25.008 37.5098 25.008H36.6778L38.7898 30H37.7338L35.6218 25.008H33.4458V30H32.4858ZM30.3738 30V17.136H31.3338V30H30.3738ZM37.4458 18.096H33.4458V19.248H37.5098C38.0218 19.2693 38.4271 19.4507 38.7258 19.792C39.0458 20.112 39.2058 20.5387 39.2058 21.072C39.2058 21.6053 39.0458 22.0427 38.7258 22.384C38.4058 22.7253 38.0004 22.896 37.5098 22.896H33.4458V24.048H37.4458C38.2564 24.048 38.9391 23.8027 39.4938 23.312C40.0698 22.8 40.3578 22.0533 40.3578 21.072C40.3578 20.0907 40.0698 19.3547 39.4938 18.864C38.9391 18.352 38.2564 18.096 37.4458 18.096ZM37.4458 20.208H33.4458V21.936H37.4458C37.6804 21.936 37.8724 21.872 38.0218 21.744C38.1711 21.5947 38.2458 21.3707 38.2458 21.072C38.2458 20.7733 38.1711 20.56 38.0218 20.432C37.8724 20.2827 37.6804 20.208 37.4458 20.208ZM45.6733 30V17.136H46.6333V30H45.6733ZM43.5613 30V17.136H44.5213V30H43.5613ZM51.2983 30V17.136H54.4983C55.8423 17.1573 57.0263 17.4453 58.0503 18C59.0743 18.5547 59.8743 19.312 60.4503 20.272C61.0476 21.232 61.3463 22.3307 61.3463 23.568C61.3463 24.8053 61.0476 25.9147 60.4503 26.896C59.8743 27.856 59.0636 28.6133 58.0183 29.168C56.9943 29.7227 55.8209 30 54.4983 30H51.2983ZM49.1863 30V17.136H50.1463V30H49.1863ZM54.4023 18.096H52.2583V19.248H54.4983C55.9063 19.2693 57.0476 19.6747 57.9223 20.464C58.7969 21.2533 59.2343 22.288 59.2343 23.568C59.2343 24.8693 58.7863 25.9147 57.8903 26.704C57.0156 27.4933 55.8849 27.888 54.4983 27.888H52.2583V29.04H54.4023C55.5969 29.04 56.6423 28.816 57.5383 28.368C58.4343 27.8987 59.1276 27.248 59.6183 26.416C60.1303 25.584 60.3863 24.6347 60.3863 23.568C60.3863 22.48 60.1303 21.5307 59.6183 20.72C59.1276 19.888 58.4343 19.248 57.5383 18.8C56.6423 18.3307 55.5969 18.096 54.4023 18.096ZM54.4023 20.208H52.2583V26.928H54.4023C55.5969 26.928 56.5356 26.6293 57.2183 26.032C57.9223 25.4347 58.2743 24.6133 58.2743 23.568C58.2743 22.5227 57.9223 21.7013 57.2183 21.104C56.5356 20.5067 55.5969 20.208 54.4023 20.208ZM63.5925 25.2V17.136H64.5525V25.168C64.5525 26.5333 64.9578 27.5787 65.7685 28.304C66.6005 29.008 67.5818 29.36 68.7125 29.36C69.8432 29.36 70.8138 29.008 71.6245 28.304C72.4565 27.5787 72.8725 26.5333 72.8725 25.168V17.136H73.8325V25.2C73.8112 26.288 73.5658 27.216 73.0965 27.984C72.6485 28.7307 72.0405 29.3067 71.2725 29.712C70.5045 30.1173 69.6512 30.32 68.7125 30.32C67.7738 30.32 66.9098 30.1173 66.1205 29.712C65.3525 29.3067 64.7338 28.72 64.2645 27.952C63.8165 27.184 63.5925 26.2667 63.5925 25.2ZM65.7045 25.2V17.136H66.6645V25.168C66.6645 25.8933 66.8672 26.4267 67.2725 26.768C67.6778 27.088 68.1578 27.248 68.7125 27.248C69.2672 27.248 69.7472 27.088 70.1525 26.768C70.5578 26.4267 70.7605 25.8933 70.7605 25.168V17.136H71.7205V25.2C71.6992 26.2027 71.3898 26.96 70.7925 27.472C70.2165 27.9627 69.5232 28.208 68.7125 28.208C67.9018 28.208 67.1978 27.952 66.6005 27.44C66.0032 26.928 65.7045 26.1813 65.7045 25.2ZM78.517 30V17.136H79.477V26.928H85.205V27.888H79.477V29.04H85.205V30H78.517ZM76.405 30V17.136H77.365V30H76.405Z"
                                fill="white" />
                            <path
                                d="M104.488 12.848L103.88 12.048L109.512 4.272H110.696L104.488 12.848ZM105.832 14.576L105.224 13.776L112.136 4.272H113.32L105.832 14.576ZM107.176 16.304L106.568 15.504L114.76 4.272H115.944L107.176 16.304ZM98.824 30V4.272H99.784V30H98.824ZM94.6 30V4.272H95.56V30H94.6ZM96.712 30V4.272H97.672V30H96.712ZM115.048 30L102.568 13.84L103.176 13.04L116.264 30H115.048ZM112.392 30L101.288 15.632L101.896 14.8L113.608 30H112.392ZM109.704 30L100.008 17.424L100.584 16.624L110.92 30H109.704ZM119.216 30L123.888 17.136H124.912L129.584 30H128.56L124.4 18.544L123.792 20.208L127.344 30H126.32L125.776 28.464H120.784L120.24 30H119.216ZM116.976 30L121.648 17.136H122.672L118 30H116.976ZM121.904 25.392H124.656L123.28 21.616L121.904 25.392ZM121.136 27.504H125.424L125.008 26.352H121.552L121.136 27.504ZM131.186 30V17.136H132.146V30H131.186ZM141.874 30V17.136H142.834V30H141.874ZM139.762 26.416L134.258 18.768V20.72L139.762 28.368V26.416ZM133.298 30V17.136H134.258L139.762 24.784V17.136H140.722V30H139.762L134.258 22.352V30H133.298ZM144.445 18.096V17.136H154.973V18.096H144.445ZM148.157 30V20.208H144.445V19.248H154.973V20.208H151.229V30H150.269V20.208H149.117V30H148.157Z"
                                fill="white" />
                        </svg>
                    </Link>
                    <label htmlFor="menu" className="hamburger flex flex-col gap-2 p-5 md:hidden">
                        <span className="block h-px w-7 rounded bg-secondary"></span>
                        <span className="block h-px w-7 rounded bg-secondary"></span>
                        <span className="block h-px w-7 rounded bg-secondary"></span>
                    </label>
                </div>
                <div className="hidden md:block">
                    <ul className="flex flex-row items-center gap-8">
                        <li className="after:content-[''] after:block after:border-b-2 after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/"}>Home</Link></li>
                        <li className="after:content-[''] after:block after:border-b-2 after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"services"}>Services</Link></li>
                        <li className="after:content-[''] after:block after:border-b-2 after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/#about"}>About</Link></li>
                        <li className="after:content-[''] after:block after:border-b-2 after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/#contact"}>Contact</Link></li>
                    </ul>
                </div>
                <ul className="mobile-menu flex flex-col items-center mr-6 w-full md:hidden">
                    <li className="w-full text-center transition-all duration-300 h-0 m-0 text-[0px] after:border-b-0 after:content-[''] after:block after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/"}>Home</Link></li>
                    <li className="w-full text-center transition-all duration-300 h-0 m-0 text-[0px] after:border-b-0 after:content-[''] after:block after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"services"}>Services</Link></li>
                    <li className="w-full text-center transition-all duration-300 h-0 m-0 text-[0px] after:border-b-0 after:content-[''] after:block after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/#about"}>About</Link></li>
                    <li className="w-full text-center transition-all duration-300 h-0 m-0 text-[0px] after:border-b-0 after:content-[''] after:block after:scale-x-0 after:transition-all hover:after:scale-x-100"><Link className="block" to={"/#contact"}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}