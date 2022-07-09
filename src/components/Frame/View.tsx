import {
    HomeOutlined,
    InfoOutlined,
    TagOutlined,
    TagsOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import Link from 'next/link';
import React, {useMemo} from 'react';

import {Loading} from '@/src/components/Loading';
import {PAGE_ID, PAGE_ID_TO_ROUTE} from '@/src/config/route';
import avatar from '@/src/static/avatar.png';
import {Category} from '@/src/types';
import {getCategoryLink} from '@/src/utils/route';

import Style from './Style.module.scss';

const {Sider, Footer, Content, Header} = Layout;

interface Props {
    hitokoto: string;
    year: number;
    categories: Array<Category>;
    loading: boolean;
    children?: React.ReactNode;
}

export function FrameView(props: Props) {
    const {hitokoto, year, categories, children, loading} = props;
    const menuItems = useMemo(
        () => [
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
                children: categories.map((category) => {
                    const {id, name} = category;
                    return {
                        label: (
                            <div>
                                <Link href={getCategoryLink(id)}>
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
        ],
        [categories],
    );

    return (
        <Layout className={Style.Frame}>
            {loading && <Loading />}
            {!loading && (
                <>
                    {/*在宽 500px 以上屏幕显示的 Sider*/}
                    <Sider theme={'light'} className={Style.sidebar}>
                        <div className={Style.sidebarInner}>
                            <div className={Style.avatarWrapper}>
                                <img
                                    src={avatar.src}
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
                                    <img
                                        src={avatar.src}
                                        className={Style.avatar}
                                        alt={'avatar'}
                                    />
                                </div>
                                <Menu
                                    className={Style.menu}
                                    mode={'horizontal'}
                                    selectable={false}
                                    items={menuItems}
                                    theme={'light'}
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
                </>
            )}
        </Layout>
    );
}
