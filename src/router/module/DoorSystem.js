import AsyncComponent from '../../js/AsyncComponent'
const option = {
    path: '/DoorSystem',
    children: [
        {
            path: 'RegionalManage',
            children: [
                {
                    path: 'Index',
                    element: AsyncComponent(() => import('@/views/DoorSystem/RegionalManage/Index.js'))
                }
            ]
        }
    ]
}
export default option