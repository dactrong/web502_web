import React from 'react'
import { Outlet } from 'react-router'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <div className="row">
            <div className="col-2">
                <aside>
                    Menu
                </aside>
            </div>
            <div className="col-10">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout