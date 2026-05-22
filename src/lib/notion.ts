import notionPkg from '@notionhq/client';
const { Client } = notionPkg;

const notion = new Client({ auth: import.meta.env.NOTION_API_KEY });

export async function getRoadmapItems() {
    const databaseId = import.meta.env.NOTION_DATABASE_ID as string;
    const apiKey = import.meta.env.NOTION_API_KEY as string;

    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    });

    if (!response.ok) {
        console.error("Notion API Error:", await response.text());
        return [];
    }

    const data = await response.json();

    return data.results.map((page: any) => {
        return {
            id: page.id,
            title: page.properties.Name?.title[0]?.plain_text || 'Unnamed Task',
            status: page.properties.Status?.status?.name || 'Backlog',
            description: page.properties.Description?.rich_text[0]?.plain_text || '',
            priority: page.properties.Priority?.number || 0,
        };
    });
}