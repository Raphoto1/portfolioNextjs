export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const sortField = searchParams.get('sortField') || 'likes';
    const sortQ = searchParams.get('sortQ') || '-1';
    const limit = searchParams.get('limit') || '10';

    const response = await fetch(
      `https://shops.creativerafa.com/api/design?sortField=${sortField}&sortQ=${sortQ}&limit=${limit}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return Response.json(data);
  } catch (error) {
    console.error('Error fetching designs:', error);
    return Response.json({ error: 'Failed to fetch designs' }, { status: 500 });
  }
}
