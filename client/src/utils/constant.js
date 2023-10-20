import path from './path';
import { BiLandscape } from 'react-icons/bi'
import { TbBrandBlogger } from 'react-icons/tb'


export const navigation = [
    {
        id: 1,
        value: "Trang Chủ",
        path: `/${path.TRANGCHU}`
    },
    {
        id: 2,
        value: "Giới Thiệu",
        path: `/${path.GIOITHIEU}`
    },
    {
        id: 3,
        value: "Đất Nền",
        path: `/${path.DATNEN}`
    },
    {
        id: 4,
        value: "Đất Dự Án",
        path: `/${path.DATDUAN}`
    },
    {
        id: 5,
        value: "Tin Tức",
        path: `/${path.TINTUC}`
    },
    {
        id: 6,
        value: "Tuyển Dụng",
        path: `/${path.TUYENDUNG}`
    },
    {
        id: 7,
        value: "Liên Hệ",
        path: `/${path.LIENHE}`
    },
]


export const adminSidebar = [
    {
        id: 1,
        type: "PARENT",
        text: "Quản lý đất nền và đất dự án",
        icon: <BiLandscape size={20} />,
        subMenu: [
            {
                id: 1,
                text: "Quản lý đất nền",
                path: `/${path.ADMIN}/${path.QUAN_LY_DAT_NEN}`
            },
            {
                id: 2,
                text: "Quản lý đất dự án",
                path: `/${path.ADMIN}/${path.QUAN_LU_DAT_DU_AN}`
            },
            {
                id: 3,
                text: "Tạo thông tin đất",
                path: `/${path.ADMIN}/${path.TAO_DAT}`
            },
        ]

    },
    {
        id: 2,
        type: "PARENT",
        text: "Quản lý tin tức",
        icon: <TbBrandBlogger size={20} />,
        subMenu: [
            {
                text: "Quản lý tin tức",
                path: `/${path.ADMIN}/${path.QUAN_LY_TIN_TUC}`
            },
            {
                text: "Tạo thông tin tin tức",
                path: `/${path.ADMIN}/${path.TAO_TIN_TUC}`
            },
        ]

    },
]

export const category = [
    {
        id: 1,
        text: "Đất nền",
        value: "dat-nen"
    },
    {
        id: 2,
        text: "Đất dự án",
        value: "dat-du-an"
    }
]