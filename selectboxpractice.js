var data = [
	{
		department: "개발부서1",
		groups: [
			{
				groupName: "그룹1",
				employees: ["사원1", "사원2", "사원3"],
			},
			{
				groupName: "그룹2",
				employees: ["사원4", "사원5", "사원6"],
			},
		],
	},
	{
		department: "개발부서2",
		groups: [
			{
				groupName: "그룹3",
				employees: ["사원7", "사원8", "사원9"],
			},
			{
				groupName: "그룹4",
				employees: ["사원10", "사원11", "사원12"],
			},
		],
	},
];

$(document).ready(function () {
	$.each(data, function (index, item) {
		$("#department").append(
			$("<option>", { value: item.department, text: item.department })
		);
	});

	$("#department").change(function () {
		var department = $(this).val();
		var departmentData = data.find(
			(item) => item.department === department
		);
		$("#group")
			.empty()
			.append($("<option>", { value: "", text: "선택" }));
		if (departmentData) {
			$.each(departmentData.groups, function (index, group) {
				$("#group").append(
					$("<option>", {
						value: group.groupName,
						text: group.groupName,
					})
				);
			});
		}
	});

	$("#group").change(function () {
		var department = $("#department").val();
		var groupName = $(this).val();
		var departmentData = data.find(
			(item) => item.department === department
		);
		var groupData = departmentData.groups.find(
			(group) => group.groupName === groupName
		);
		$("#employee")
			.empty()
			.append(
				$("<option>", {
					value: "",
					text: "--Please choose an option--",
				})
			);
		if (groupData) {
			$.each(groupData.employees, function (index, employee) {
				$("#employee").append(
					$("<option>", { value: employee, text: employee })
				);
			});
		}
	});
});
