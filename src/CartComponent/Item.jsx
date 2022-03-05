import { Card, CardContent, CardMedia, MenuItem, Select, Typography } from '@mui/material'
import { Box, style } from '@mui/system'
import React from 'react'
import styles from "./item.module.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';




export const Item = () => {
    const data = {
        name: "Men Navy Blue Slim Fit Mid-Rise Clean Look Stretchable Jeans",
        price: {
            mrp: 1499,
            discount: 60,
            sp: 599
        },
        brand_name: "Roadster",
        sizes: [28, 32, 34, 36, 38],
        customer_rating: 3.9,
        product_details: [
            "Navy Blue dark wash 5-pocket mid-rise jeans, clean look, no fade, has a button and zip closure, and waistband with belt loops"
        ],
        images: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/e2101e71-8707-4110-961a-14b675a574481566552597315-Roadster-Men-Jeans-4211566552597089-1.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/169833b3-b043-4ced-9a33-c0b17922fead1566549173935-Roadster-Men-Jeans-4031566549172277-2.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/4c970a9c-5808-45fc-bba5-4e1d7e92a4261566549173910-Roadster-Men-Jeans-4031566549172277-3.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/3f274d20-5c6e-4821-8de2-c710dce8455b1566549173885-Roadster-Men-Jeans-4031566549172277-4.jpg",
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10064529/2019/8/23/04fb55a0-6a60-4b70-a7cf-fee5996657af1566549173861-Roadster-Men-Jeans-4031566549172277-5.jpg"
        ]
    }


    return (
        <div>
            <Card sx={{ display: 'flex', border: "1px solid #dfdfe2", padding: "13px", height: "9.8em", paddingRight: "0px" }} className={style.item}>
                <CardMedia
                    component="img"
                    sx={{ width: 131, }}
                    image={data.images[0]}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: "0px" }}>
                    <CardContent sx={{ flex: '1 0 auto', padding: "0px", paddingLeft: "10px" }}>
                        <Typography component="div" className={styles.brand_name} variant="h6">
                            {data.brand_name} <span style={{ float: "right" }}><CloseIcon /></span>
                        </Typography>
                        <Typography component="div" className={styles.name} variant="p">
                            {data.name}
                        </Typography>
                        <Typography component="div" className={styles.sold} variant="p">
                            Sold by: Vision Star
                        </Typography>
                        <Select
                            value="S"
                            label="Size"
                            className={styles.selectbox}
                        //  onChange={handleChange}
                        >
                            <MenuItem value={10}>S</MenuItem>
                            <MenuItem value={20}>M</MenuItem>
                            <MenuItem value={30}>L</MenuItem>
                            <MenuItem value={10}>XL</MenuItem>
                            <MenuItem value={20}>XXL</MenuItem>
                        </Select>
                        <Select
                            value="S"
                            label="Size"
                            className={styles.selectbox}
                        //  onChange={handleChange}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                        </Select>

                        <Typography variant="body1" className={styles.price_details} component="div">
                            <p><CurrencyRupeeIcon style={{ width: "11", height: "11", marginTop: "3px" }} />{data.price.sp}</p>
                            <p style={{ textDecoration: "line-through", color: "#d0d0d1", fontWeight: "300" }}><CurrencyRupeeIcon style={{ width: "11", height: "11", marginTop: "3px" }} />{data.price.mrp}</p>
                            <p style={{ color: "hsl(346, 100%, 62%)", fontWeight: "300" }}>{`${data.price.discount}% `} OFF</p>
                        </Typography>
                        <Typography component="div" className={styles.delivery} variant="p">
                            <DoneIcon style={{ color: "green", width: "15", height: "15", marginTop: "5px" }} /> Delivery by <span style={{ fontWeight: "500" }}>17 MARCH 2022</span>
                        </Typography>
                    </CardContent>
                </Box>

            </Card>
        </div>
    )
}
// <img height="" width="100%" src={data.images[0]} alt="img" />
