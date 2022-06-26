import {
    HomeOutlined,
    InfoOutlined,
    TagOutlined,
    TagsOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import Img from 'next/image';
import Link from 'next/link';
import React from 'react';

import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';
import avatar from '@/src/static/avatar.png';
import {Category} from '@/src/types';

import Style from './Style.module.scss';

const {Sider, Footer, Content, Header} = Layout;

interface Props {
    hitokoto: string;
    year: number;
    categoryList: Array<Category>;
    children?: React.ReactNode;
}

export function FrameView(props: Props) {
    const {hitokoto, year, categoryList, children} = props;
    const menuItems = [
        {
            label: (
                <div className={Style.item}>
                    <Link href={PAGE_ID_TO_ROUTE[PAGE_ID.INDEX]}>
                        <a>
                            <HomeOutlined className={Style.icon} />
                            首页
                        </a>
                    </Link>
                </div>
            ),
            key: PAGE_ID_TO_ROUTE[PAGE_ID.INDEX],
        },
        {
            label: (
                <>
                    <TagsOutlined className={Style.icon} />
                    分类
                </>
            ),
            key: 'categorySubmenu',
            children: categoryList.map((category) => {
                const {id, name} = category;
                const urlSearchParams = new URLSearchParams();
                urlSearchParams.set('id', id.toString());
                return {
                    label: (
                        <div>
                            <Link
                                href={`${
                                    PAGE_ID_TO_ROUTE[PAGE_ID.CATEGORY]
                                }?${urlSearchParams.toString()}`}>
                                <a>
                                    <TagOutlined className={Style.icon} />
                                    {name}
                                </a>
                            </Link>
                        </div>
                    ),
                    key: id,
                };
            }),
        },
        {
            label: (
                <div className={Style.item}>
                    <Link href={PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT]}>
                        <a>
                            <InfoOutlined className={Style.icon} />
                            关于
                        </a>
                    </Link>
                </div>
            ),
            key: PAGE_ID_TO_ROUTE[PAGE_ID.ABOUT],
        },
    ];

    return (
        <Layout className={Style.Frame}>
            {/*在宽 500px 以上屏幕显示的 Sider*/}
            <Sider theme={'light'} className={Style.sidebar}>
                <div className={Style.sidebarInner}>
                    <div className={Style.avatarWrapper}>
                        <Img
                            src={avatar}
                            className={Style.avatar}
                            alt={'avatar'}
                        />
                    </div>
                    <Menu
                        className={Style.menu}
                        mode={'inline'}
                        selectable={false}
                        items={menuItems}
                    />
                </div>
            </Sider>

            <Layout className={Style.main}>
                {/*在宽 500 px 以下屏幕显示的 Header*/}
                <Header className={Style.header}>
                    <div className={Style.headerInner}>
                        <div className={Style.avatarWrapper}>
                            <Img
                                src={avatar}
                                className={Style.avatar}
                                alt={'avatar'}
                            />
                        </div>
                        <Menu
                            className={Style.menu}
                            mode={'horizontal'}
                            selectable={false}
                            theme={'dark'}
                            items={menuItems}
                        />
                    </div>
                </Header>
                <Content className={Style.content}>{children}</Content>
                <Footer className={Style.footer}>
                    <div className={Style.info}>
                        {year} - Designed & Created by Soulike
                    </div>
                    <div className={Style.hitokoto}>{hitokoto}</div>
                </Footer>
            </Layout>
        </Layout>
    );
}
