const College = require('../model/courseschema')
module.exports = {
    addCourse: async (req, res) => {
        const { id } = req.params; // Assuming collegeId is passed as a parameter in the request
        const { courseName, duration, courseFee, subjects } = req.body;
        console.log("demo console" + id, courseName, duration, courseFee, subjects)
        try {
            const college = await College.findById(id);

            if (!college) {
                return res.status(404).json({ error: 'College not found' });
            }

            const newCourse = {
                courseName,
                duration,
                courseFee,
                subjects,
            };

            college.courses.push(newCourse); // Add the new course to the courses array

            await college.save(); // Save the updated college

            res.status(201).json({ message: 'Course added successfully', course: newCourse });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getAllCourses: async (req, res) => {
        try {
            const colleges = await College.find({});
            const courses = [];

            colleges.forEach(college => {
                courses.push(...college.courses);
            });

            res.status(200).json({ courses });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getCourseByCollege: async (req, res) => {
        const { id } = req.params; // Assuming collegeId is passed as a parameter in the request
        try {
            const college = await College.findById(id);
            if (!college) {
                return res.status(404).json({ error: 'College not found' });
            }
            const courses = college.courses;

            res.status(200).json({ courses });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    updateCourse: async (req, res) => {
        const { collegeId, courseId } = req.params; // Assuming collegeId and courseId are passed as parameters in the request
        const { courseName, duration, courseFee, subjects } = req.body;

        try {
            const college = await College.findById(collegeId);

            if (!college) {
                return res.status(404).json({ error: 'College not found' });
            }

            const course = college.courses.id(courseId); // Find the course in the courses array by its ID

            if (!course) {
                return res.status(404).json({ error: 'Course not found' });
            }

            // Update the course details
            course.courseName = courseName || course.courseName;
            course.duration = duration || course.duration;
            course.courseFee = courseFee || course.courseFee;
            course.subjects = subjects || course.subjects;

            await college.save(); // Save the updated college

            res.status(200).json({ message: 'Course updated successfully', course });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    deleteCourse: async (req, res) => {
        const { collegeId, courseId } = req.params; // Assuming collegeId and courseId are passed as parameters in the request
        console.log(collegeId, courseId);
    
        try {
            const college = await College.findByIdAndUpdate(
                collegeId,
                { $pull: { courses: { _id: courseId } } },
                { new: true }
            );
    
            if (!college) {
                return res.status(404).json({ error: 'College not found' });
            }
    
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Server error' });
        }
    }
}
        


// try {
//     const college = await College.findById(collegeId);

//     if (!college) {
//         return res.status(404).json({ error: 'College not found' });
//     }

//     const courseIndex = college.courses.findIndex(course => course._id.toString() === courseId);

//     if (courseIndex === -1) {
//         return res.status(404).json({ error: 'Course not found' });
//     }

//     college.courses.splice(courseIndex, 1); // Remove the course from the courses array

//     await college.save(); // Save the updated college

//     res.status(200).json({ message: 'Course deleted successfully' });
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Server error' });
// }
// }