import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import hellow from '@/components/hellow'
import login from '@/components/login'

import table_bussiness from '@/components/table/bussiness_overview'
import apartment_manag from '@/components/channel_info_manage/channel_type/apartment_manag'
import store_manag from '@/components/channel_info_manage/channel_type/store_manag'
import opponent from '@/components/channel_info_manage/opponent'
import manager from '@/components/channel_manager/manager'
import creat_push from '@/components/push_manage/creat_push'
import push_list from '@/components/push_manage/push_list'
import add_channel from '@/components/add_channel/add'
import author_config from '@/components/limits_manage/author_config'
import organ_config from '@/components/limits_manage/organ_config'


Vue.use(Router)
const Foo = { template: `<div><router-view></router-view></div>`}
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      children: [
            {
				      path: '/hellow',
				      name: "欢迎",
				      component:hellow
				    },
				    {
							path:'/manager',
							name:'渠道经理配置',
							component:manager
						},
				    {
							path:'/add_channel',
							name:'新增渠道审核',
							component:add_channel
						}
        ]
    },
    {
      path: '/',
      name: '表格',
      component: index,
      children: [
            {
				      path: '/table_bussiness',
				      name: "业务数据概况",
				      component:table_bussiness
				    }
        ]
    },
    {
      path: '/',
      name: '渠道信息管理',
      component: index,
      children: [
            {
				      path: '/',
				      name: "渠道分类",
				      component:Foo,
				      children:[
				      	{
				      		path:'/apartment_manag',
				      		name:'楼盘管理',
				      		component:apartment_manag
				      	},
				      	{
				      		path:'/store_manag',
				      		name:'门店管理',
				      		component:store_manag
				      	}
				      ]
				    },
				    {
				    	path:'/opponent',
				      name:'异网对手管理',
				      component:opponent
				    }
        ]
    },
		{
      path: '/',
      name: '推送管理',
      component: index,
      children: [
            {
				      path: '/creat_push',
				      name: "创建推送",
				      component:creat_push
				    },
            {
				      path: '/push_list',
				      name: "推送列表",
				      component:push_list
				    }
        ]
    },
		{
      path: '/',
      name: '系统配置',
      component: index,
      children: [
            {
				      path: '/author_config',
				      name: "权限配置",
				      component:author_config
				    },
            {
				      path: '/organ_config',
				      name: "组织管理",
				      component:organ_config
				    }
        ]
    },
    {
    	path:'/login',
    	name:'登陆',
    	component:login
    }
  ]
})
