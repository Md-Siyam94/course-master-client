import React from 'react'

export default function OverView() {
  return (
    <div>
         {/* Stats */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                        <StateCard title="Total Students" value={students.length} change="12%" positive icon={Users} color="blue" />
                        <StateCard title="Active Courses" value={activeCourses} change="3%" positive icon={BookOpen} color="amber" />
                        <StateCard title="Total Enrollments" value={totalEnrolled} change="8%" positive icon={TrendingUp} color="green" />
                        <StateCard title="Completion Rate" value={`${completionRate}%`} change="2%" positive icon={Award} color="rose" />
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6"> */}
                    {/* Top Courses */}
                    {/* <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <h3 className="text-base font-semibold text-slate-800 mb-5">Top Courses by Enrollment</h3>
                            <div className="space-y-4">
                                {courses
                                    .filter(c => c.status === 'active')
                                    .sort((a, b) => b.enrolled_count - a.enrolled_count)
                                    .slice(0, 5)
                                    .map(course => {
                                        const max = Math.max(...courses.map(c => c.enrolled_count));
                                        const pct = max > 0 ? (course.enrolled_count / max) * 100 : 0;
                                        return (
                                            <div key={course.id}>
                                                <div className="flex items-center justify-between mb-1.5">
                                                    <span className="text-sm font-medium text-slate-700">{course.title}</span>
                                                    <span className="text-xs text-slate-500">{course.enrolled_count} students</span>
                                                </div>
                                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-amber-400 rounded-full transition-all duration-700"
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div> */}

                    {/* Recent Activity */}
                    {/* <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                            <h3 className="text-base font-semibold text-slate-800 mb-5">Recent Activity</h3>
                            <div className="space-y-4">
                                {activity.slice(0, 5).map(item => (
                                    <ActivityItem key={item.id} item={item} compact />
                                ))}
                            </div>
                        </div>
                    </div> */}

                    {/* Student Status Distribution */}
                    {/* <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                        <h3 className="text-base font-semibold text-slate-800 mb-5">Student Status Overview</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { label: 'Active', value: activeStudents, color: 'bg-emerald-500', light: 'bg-emerald-50 text-emerald-700' },
                                { label: 'Inactive', value: students.filter(s => s.status === 'inactive').length, color: 'bg-slate-400', light: 'bg-slate-100 text-slate-600' },
                                { label: 'Suspended', value: students.filter(s => s.status === 'suspended').length, color: 'bg-rose-400', light: 'bg-rose-50 text-rose-700' },
                            ].map(stat => (
                                <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-50">
                                    <div className={`text-2xl font-bold ${stat.light.split(' ')[1]}`}>{stat.value}</div>
                                    <div className="flex items-center justify-center gap-1.5 mt-2">
                                        <span className={`w-2 h-2 rounded-full ${stat.color}`} />
                                        <span className="text-xs text-slate-500">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}
    </div>
  )
}
