function getTemplate(name)
{
	switch(name)
	{
		case 'todo':
			return '<li> <%= drink %> : <%= cost %> </li>';
		default :
			return false;
	}
}
