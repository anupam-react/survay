import React from 'react'
import LineChart from './LineChart'
import JobCard from './JobCard'
import MemberTable from './MemberTable'

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-4 mb-4">
      <LineChart />
      <JobCard />
      </div>
      <MemberTable />
    </div>
  )
}

export default Dashboard
