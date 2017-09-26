import create from './components/create.vue';
import view from './components/view.vue';
import article from './components/article.vue'

export default [
	{
		path:'/',
		name:'main',
		component:article
	},
	{
		path:'/view/:noteId',
		name:'view',
		component:view,
		//params:note.date
	},
	{
		path:'/create/',
		name:'create',
		component:create
	},
	{
		path:'*',
		redirect:'/'
	} //重定向
]

//如果应用过大，请用页面的懒加载
