const menudata= [
  {
    id: 0,
    name:'home',
    desc: '首页',
    parentsid:[0]
  },
  {
    id:1,
    name: 'userslist',
    desc:'用户列表',
    parentsid:[0]
  },
  {
    id:2,
    name:'coachlist',
    desc:'教练列表',
    parentsid:[0]
  },
  {
    id:3,
    name:'coachvertify',
    desc:'教练审核',
    parentsid:[0,2]
  }
]

function getMenu(routesname='home',menu=menudata){
  let results;
  for(let i=0;i<menu.length;i++){
    if(menu[i].name==routesname){
      let ids=menu[i].parentsid.slice().concat([menu[i].id])
      results=menu.filter((item,index)=>{
        if(ids.includes(item.id)) return true
      })
    }
  }
  return results
}

export default getMenu
