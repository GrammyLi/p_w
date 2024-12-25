import { Button, message, Modal, Table, Tag } from "antd";
import { ColumnsType } from "antd/lib/table/interface";
import { FC, useState } from "react";
import "./index.less";
import ExcelImportUI from "../../../../components/ExcelImportUI";

const ExampleImport: FC<{}> = (props) => {
  // 使用 map 来映射 feasibility 到 Tag
  const feasibilityMap: Record<number, React.ReactNode> = {
    1: <Tag color="green">可做</Tag>,
    2: <Tag color="orange">难度高不可做</Tag>,
    0: <Tag color="gray">无状态</Tag>,
  };
  const [tasks, setTasks] = useState<
    {
      query_id: number;
      query: string;
      category: string;
      note_relevance: number;
      task_id: string;
      feasibility: number;
      feasibility_reason: string;
    }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const renderFeasibilityTag = (feasibility: number) => {
    // 使用 map 获取对应的 Tag，如果没有找到则返回默认 Tag
    return feasibilityMap[feasibility] || <Tag color="blue">未知</Tag>;
  };
  // query_id, query, 类目，笔记相关性，task_id
  const columns: ColumnsType<any> = [
    {
      title: "Query Id",
      key: "query_id",
      dataIndex: "query_id",
      width: 90,
    },
    {
      title: "任务query",
      key: "query",
      dataIndex: "query",
      width: 150,
    },
    {
      title: "类目",
      key: "category",
      dataIndex: "category",
      width: 200,
    },
    {
      title: "笔记相关性",
      key: "note_relevance",
      dataIndex: "note_relevance",
      width: 200,
    },
    {
      title: "任务ID",
      key: "task_id",
      dataIndex: "task_id",
      width: 200,
    },
    // Inside your columns definition:
    {
      title: "可做性",
      key: "feasibility",
      dataIndex: "feasibility",
      width: 100,
      render: (_: any, record: any) => renderFeasibilityTag(record.feasibility),
    },
    {
      title: "不可做原因",
      key: "feasibility_reason",
      dataIndex: "feasibility_reason",
      width: 100,
    },
  ];

  const handleChange = (data: string[][]) => {
    console.log("change", data);
    let _tasks = data.map((row) => ({
      query_id: Number(row[0]) || 0,
      query: row[1],
      category: row[2],
      note_relevance: Number(row[3]) || 0,
      task_id: row[4],
      feasibility: Number(row[5]) || 0,
      feasibility_reason: row[6] || "",
    }));
    setTasks(_tasks);
  };

  const handleImport = () => {
    const taskIds = tasks.map((task) => task.task_id);
    console.log("tasks", tasks, "taskIds", taskIds);
  };

  return (
    <div className="example-import">
      {!tasks.length && (
        <div className="example-import__excel">
          <ExcelImportUI demoUrl="" onChange={handleChange}></ExcelImportUI>
        </div>
      )}

      {!!tasks.length && (
        <div>
          <div className="example-import__summary">
            共
            <span className="example-import__summary-num">{tasks.length}</span>
            条
          </div>
          <Table
            loading={false}
            pagination={false}
            columns={columns}
            dataSource={tasks}
            scroll={{
              y: "calc(100vh - 360px)",
            }}
          />
          <div className="example-import__footer">
            <Button type="primary" loading={loading} onClick={handleImport}>
              确定导入
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExampleImport;
