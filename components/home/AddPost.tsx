import { Button, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//import Icon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
//import { TouchableOpacity } from 'react-native-gesture-handler'

import Modal from "react-native-modal";
export default function AddPost() {

    const arr = [
        {
            id: 1,
            logo: "https://i.pinimg.com/originals/d5/aa/8c/d5aa8cd41cb987dc66532f615b565812.jpg",
            title: "Gaykwad",
            subtitle: "50 M",
            image: "https://i.pinimg.com/originals/0f/79/73/0f79739358d3ec4c84a83ddd982ebf89.jpg",
            description: "Self-love means that you accept yourself fully, treat yourself with kindness and respect, and nurture your growth and wellbeing.",
            like: 2100,
        },
        {
            id: 2,
            logo: "https://th.bing.com/th/id/OIP.9NvhHQQ8lMB-uxkgrZQvsAAAAA?rs=1&pid=ImgDetMain",
            title: "Coding Ninja",
            subtitle: "Sponsored",
            image: "https://1.bp.blogspot.com/-1Tnt_rDHtdg/Xs3lQYT5glI/AAAAAAAAH9o/3nu2cbiZTncpU7zX0K3mizDzw-uoBTNBwCLcBGAsYHQ/s1600/Coding_Ninjasposter.jpg",
            description: "WebBuild in-demand tech skills with our industry targeted courses. Get access to 10+ expert led coding courses for free.",
            like: 21,
        },
        {
            id: 3,
            logo: "https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg",
            title: "Esperanza",
            subtitle: "1h",
            image: "https://www.creativeboom.com/uploads/articles/f9/f9e528c50e4e9bf48151f6b728c876d33f92fc0c_630.jpeg",
            description: "Nature, in the broadest sense, is the physical world or universe. Nature can refer to the phenomena of the physical world, and also to life in general",
            like: 29,
        },
        {
            id: 4,
            logo: "https://www.levelupcollege.com/wp-content/uploads/2022/07/gfg-logo.png",
            title: "Geeks for Geeks",
            subtitle: "Sponsored",
            image: "https://th.bing.com/th/id/OIP.ORIDRMtQ3WTPLeVt5pocBAHaD_?rs=1&pid=ImgDetMain",
            description: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web application",
            like: 30,
        },
        {
            id: 5,
            logo: "https://th.bing.com/th/id/R.0baf6cd321175f21f926b56f77fcd0ab?rik=EYOiSHMF9yhOUw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rH9ibyhCVoQ%2fUNKzT36xWDI%2fAAAAAAAAASY%2foXAzWWb5WWw%2fs1600%2fcute%2bboys%2bwallpapers%2b(1).jpg&ehk=zos9rLdb3E4NtJ8muMBjVFnNBSoYwQdxu4CcN5D6Q5M%3d&risl=&pid=ImgRaw&r=0",
            title: "Any Joster",
            subtitle: "5H",
            image: "https://th.bing.com/th/id/R.0baf6cd321175f21f926b56f77fcd0ab?rik=EYOiSHMF9yhOUw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-rH9ibyhCVoQ%2fUNKzT36xWDI%2fAAAAAAAAASY%2foXAzWWb5WWw%2fs1600%2fcute%2bboys%2bwallpapers%2b(1).jpg&ehk=zos9rLdb3E4NtJ8muMBjVFnNBSoYwQdxu4CcN5D6Q5M%3d&risl=&pid=ImgRaw&r=0",
            description: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web application",
            like: 30,
        },
        {
            id: 6,
            logo: "https://logodownload.org/wp-content/uploads/2021/07/dominos-pizza-logo-0.png",
            title: "Domino’s Pizza",
            subtitle: "Sponsored",
            image: "https://th.bing.com/th/id/R.42371f428400947fdfb68cb9d4860494?rik=2AeIFJq8Oz1W5w&riu=http%3a%2f%2fthelistlove.com%2fwp-content%2fuploads%2f2014%2f12%2fdominos-pepperoni-pizza.jpg&ehk=Oef4qishiYTTxr6AwemwDV6YmhgcdIt%2fK7et5vN8Hks%3d&risl=&pid=ImgRaw&r=0",
            description: "Domino's is an American multinational pizza restaurant chain. Founded in 1960, the chain is owned by master franchisor Domino's Pizza, Inc. and led by CEO Russell Weiner",
            like: 30,
        },
        {
            id: 7,
            logo: "https://i.pinimg.com/originals/72/e4/5a/72e45a81d0118d1b3576ebe4f248b3ae.jpg",
            title: "Simple Girl",
            subtitle: "25 H",
            image: "https://i.pinimg.com/736x/65/26/eb/6526eb829824e9d7abf34b943fcc78aa.jpg",
            description: "Used by some of the world's largest companies, Next.js enables you to create full-stack Web application",
            like: 30,
        },
        {
            id: 8,
            logo: "https://1.bp.blogspot.com/-3r2LTysMpt8/XfRu0y_pH8I/AAAAAAAAmK8/kKR_X-WCjowRpQGHctiztIRDVhpPDEtogCNcBGAsYHQ/s1600/3.jpg",
            title: "Rohit Sharma",
            subtitle: "15H",
            image: "https://i.ytimg.com/vi/B6C3m23Aiz8/maxresdefault.jpg",
            description: "Rohit Gurunath Sharma is an Indian international cricketer who currently plays and captains the India national cricket team across all formats. Considered one of the best batsmen of his generation",
            like: '30M',
        },
        {
            id: 9,
            logo: "https://i1.wp.com/telugucinema.com/wp-content/uploads/2021/02/shreya-ghoshal.jpg?fit=1200%2C900&ssl=1",
            title: "Shreya Ghosal ",
            subtitle: "Sponsored",
            image: "https://4.bp.blogspot.com/-m0bdD_DIlzw/T9Qdgu0advI/AAAAAAAAxAw/tt5xRF2xsUM/s1600/Gorgeous+shreya+ghoshal+in+white+saree+at+concert+latest+pics+sabhotcom+%25287%2529.jpg",
            description: "Shreya Ghoshal is an Indian singer. Noted for her wide vocal range and versatility, she is one of the most prolific and popular singers of India. She has recorded songs for films and albums",
            like: 30,
        },
        {
            id: 10,
            logo: "https://www.cinejolly.com/wp-content/uploads/2018/03/Madhuri-Dixit-In-Stunning-Saree-Hot-Pics.jpg",
            title: "Madhuri Dixit",
            subtitle: "Sponsored",
            image: "https://i.pinimg.com/originals/ed/fc/df/edfcdfc50ed1102ff4b74fdf88db6dda.png",
            description: "Madhuri Dixit Nene is an Indian actress who primarily works in Hindi films. A leading actress of Indian cinema, she has appeared in over 70 films.",
            like: '35M',
        },
    ]
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    return (
        <View >
            {arr.map((item) => (
                <View key={item.id} style={styles.flexxcontainer}>

                    <View style={styles.header}>
                        <View style={styles.logo}>
                            <Image source={{ uri: item.logo }} style={styles.image} />

                            <View>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.stitle}>{item.subtitle}</Text>
                            </View>
                        </View>
                        <View style={styles.icons}>
                            <Icon name='more-horiz' size={30} />

                            <Icon name='clear' size={30} />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.stitlee}>{item.description}</Text>
                    </View>

                    <View>
                        <View>

                            <TouchableOpacity onPress={()=>{Linking.openURL(item.image);}}>

                                <Image source={{ uri: item.image }} style={styles.poster} />

                            </TouchableOpacity>


                            



                        </View>
                    </View>

                    <View style={styles.like_number}>
                        <Icon name="thumb-up" size={20} color="#0866FF" />
                        <Text style={styles.stitle}>You and {item.like} other like</Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footercontainer}>
                            <Icon name="thumb-up" size={30} />
                            <Text style={styles.comment}>Like</Text>
                        </View>
                        <View style={styles.footercontainer}>
                            <Icon name="chat-bubble" size={30} />
                            <Text style={styles.comment}>Comment</Text>
                        </View>
                        <View style={styles.footercontainer}>
                            <Icon name="forum" size={30} />
                            <Text style={styles.comment}>Message</Text>
                        </View>
                    </View>
                </View>



            ))}


            


        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        marginHorizontal: 4
    },
    flexxcontainer: {
        //borderTopWidth: 10,
        borderBottomWidth: 10,
        borderColor: "#C0C0C0",
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000000"
    },
    stitle: {
        fontSize: 15,
        fontWeight: "700",
        color: "#000000"
    },
    logo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    stitlee: {
        marginVertical: 8,
        fontSize: 17,
        fontWeight: "700",
        color: "#000000"
    },
    poster: {
        height: 400,
        width: 400,
        marginVertical: 15
    },
    footer: {
        height: 45,
        borderTopWidth: 0.25,
        borderColor: "#C0C0C0",
        //marginVertical:20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        //backgroundColor:"red"
    },

    comment: {
        fontSize: 17,
        fontWeight: "600",
        color: "#000000"
    },
    footercontainer: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        alignContent: "center",
        //backgroundColor:"green",
        flexDirection: "row",
        gap: 3,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    like_number: {
        display: "flex",
        flexDirection: "row",
        gap: 1
    }
})