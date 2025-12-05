import useEnrolledCourses from "../../../custom hooks/useEnrolledCourses";

const Enrollment = () => {
    const [enrolledCourses] = useEnrolledCourses()
    return (
        <div className="px-6 ">
            <h1 className="text-xl font-semibold">Enrolled students data</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Students name</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            enrolledCourses?.map(enrolledCourse => <tr key={enrolledCourse?._id}>
                                <td>
                                    <div className="flex  gap-3">
                                        <div className="avatar">
                                            <div className=" ">
                                                <img
                                                    className="h-16 w-24"
                                                    src={enrolledCourse?.thumbnail}
                                                    alt="thumbnail" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{enrolledCourse?.title}</div>
                                            <div className="text-sm opacity-50">{enrolledCourse?.instructor}</div>
                                            <div className="text-sm opacity-50">{enrolledCourse?.price} Tk</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {enrolledCourse?.userName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{enrolledCourse?.email}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Batch: {enrolledCourse?.batch}</span>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Enrollment;